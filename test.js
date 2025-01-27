completeVisit: function (req, res, next) {
    var vi = req.body;

    console.log("🚀 ~ vi: - completeVisit", vi)
    Visit.getVisit(vi.visitId, function (errV, visit) {

      if (errV) return res.status(500).json({ status: 500, message: "Internal Error." });

      if (visit.medicines && visit.medicines.length) {
        if (visit.markMedForFulfillment && !visit.orderReference) {
          Visit.getVisitDetailsForPdf(vi.visitId, null, function (errV, v) {
            if (errV) return cb(errV);
            var pdf = require("html-pdf");
            var options = {
              timeout: "120000",
              phantomPath:
                "./node_modules/html-pdf/node_modules/phantomjs-prebuilt/bin/phantomjs",
            };
            v.doctor.hideFooter = true;
            if (!v.doctor.customFooter) v.doctor.customFooter = false;
            if (!v.doctor.customPageMarginFlag)
              v.doctor.customPageMarginFlag = false;
            if (!v.doctor.fontOverrideFlag) v.doctor.fontOverrideFlag = false;

            // var report_template = "opd-report-s3.jade";
            //   if (v.doctor.verboseReport == "Verbose")
            //     report_template = "opd-report-verbose.jade";
            //   else if (v.doctor.verboseReport == "Landscape")
            //     report_template = "opd-report-landscape.jade";

            var report_template = "opd-report.jade";
            if (v.doctor.verboseReport == "Verbose")
              report_template = "opd-report-verbose.jade";
            else if (v.doctor.verboseReport == "Landscape")
              report_template = "opd-report-landscape.jade";

            // Get prescription HTML
            app.render(report_template, { visit: v }, function (errA, html) {
              if (html)
                // Convert HTML To PDF Stream
                pdf.create(html, options).toStream(function (err, stream) {
                  if (err)
                    return res
                      .status(500)
                      .json({ status: 500, message: "Error saved pdf" });
                  console.log("pdf is done");
                  // Upload PDF To S3 by VisitId
                  // var params = {Bucket: hi.AWS_S3_BUCKET, Key: vi.visitId + '-rpt.pdf', Body: stream};
                  var params = {
                    Bucket: hi.AWS_S3_PRODPUBLIC_BUCKET,
                    Key: "RCF/" + vi.visitId + "-rpt.pdf",
                    Body: stream,
                    ContentType: "application/pdf",
                    ACL: "public-read",
                  };
                  hi.s3.prodpublic.upload(params, function (err, data) {
                    if (err)
                      return res
                        .status(500)
                        .json({ status: 500, message: "Error uploading pdf" });
                    if (data) {
                      console.log("s3 upload is done");
                      // Get signed URLs for all scanned images as well PDF report
                      Visit.getImages(vi.visitId, function (err, images) {
                        if (!images) images = [];
                        images.push(vi.visitId + "-rpt.pdf");
                        async.map(
                          images,
                          function (image, cbr) {
                            var params = {
                              Bucket: hi.AWS_S3_BUCKET,
                              Key: image,
                              Expires: 3600 * 168,
                            };
                            hi.s3.getSignedUrl(
                              "getObject",
                              params,
                              function (errS, url) {
                                return cbr(errS, url);
                              },
                            );
                          },
                          function (errI, results) {
                            if (errI)
                              return res
                                .status(500)
                                .json({
                                  status: 500,
                                  message: "Error setting signed urls",
                                });                      
                            const subdomain = req.headers.host.split('.')[0]
                            console.log('subdomain name ', subdomain);
                            
                            // Visit.GetOrangeOmsDetailsGmrvch - return apr
                            // Visit.GetOrangeOmsDetailsRbi - return apr

                            if (subdomain == "cesmum") {
                              console.log('🚀 inside cesmum');
                              try {
                                var address1 = "Rajam";
                                var address2 = "Rajam";
                                var city = "Rajam";
                                var pincode = "532127";
                                var discpercent = 16.02

                                if (v.patient.address && Object.keys(v.patient.address).length) {
                                  address1 = v.patient.address.address1;
                                  address2 = v.patient.address.address2;
                                  city = v.patient.address.city;
                                  pincode = v.patient.address.pincode;
                                  
                                }

                                var apr = {
                                  orderid: vi.visitId,
                                  orderdate: moment().format("YYYY-MM-DD hh:mm:ss"),
                                  couponcode: "",
                                  vendorname: "RBI",
                                  drname: v.doctorName,
                                  prescriptionurl: "https://prodpublic.s3.ap-south-1.amazonaws.com/RCF/" + vi.visitId + "-rpt.pdf",
                                  shippingmethod: "HOMEDELIVERY",
                                  paymentmethod: "PREPAID",
                                  prefferedsite: hi.PLACEORDERVENDORID_RBI,
                                  ordertype: "CART",
                                  createddatetime: null,
                                  deliverydate: "",
                                  deliverytype: "HL",
                                  timeslot: "",
                                  shippingcharges: 0,
                                  categorytype: "PHARMA",
                                  landmark: "",
                                  customercomment: "",
                                  issubscribe: false,
                                  tattype: "LVDC",
                                  appversion: "",
                                  customertype: "Medium Priority SH-DEL1 CC",
                                  customerpriority: "",
                                  customercategory: "",
                                  customermisc1: "",
                                  customermisc2: "",
                                  ordermisc1: "scvdc del1",
                                  orderchannel: "MOBILE",
                                  ordermisc2: "SDE | 11:30 | yes",
                                  clusterid: "11336 - Gurgaon, DLF City, Phase - II",
                                  additionalmisc1: "manual",
                                  additionalmisc2: "",
                                  distancekm: 0.0,
                                  parentorderid: "",
                                  splits: 1,
                                  siblingorderids: "",
                                  parentorderamount: 0.0,
                                  preferreddsp: "test",
                                  fulfilmenttype: "test",
                                  modeofdelivery: "test",
                                  allocatedstorecity: "test",
                                  allocatedstoretype: "test",
                                  allocatedclustername: "test",
                                  allocatedtatduration: "test",
                                  allocatedtatlogic: "test",
                                  promisetype: "test",
                                  membershipclass: "circle",
                                  iscircleorder: "true",
                                  noncartclassification: "test",
                                  substitutionaprroval: "",
                                  comment2: "test",
                                  comment3: "test",
                                  pickupotp: "1100",
                                  fwdreturnotp: "7425",
                                  revreturnotp: "4442",
                                  transactionid: "",
                                  noncarttype: "",
                                  billing_tat: moment().format("YYYY-MM-DD hh:mm:ss"),
                                  shipping_tat: "",
                                  customerdetails: {
                                    billingaddress: address1 + ", " + address2 + ", " + city,
                                    billingpincode: pincode,
                                    billingcity: city,
                                    billingstateid: "TS",
                                    shippingaddress: address1 + ", " + address2 + ", " + city,
                                    shippingpincode: pincode,
                                    shippingcity: city,
                                    shippingstateid: "TS",
                                    customerid: "",
                                    patiendname: v.patient.name,
                                    customername: v.patient.name,
                                    primarycontactno: v.patient.mobile,
                                    secondarycontactno: v.patient.mobile,
                                    age: moment().diff(v.patient.dob, "years"),
                                    emailid: "",
                                    cardno: "0",
                                    latitude: 19.0760,
                                    longitude: 72.8777
                                  },
                                  paymentdetails: [
                                    {
                                      paymentsource: "Corporatecredit",
                                      transactionstatus: true,
                                      paymenttransactionid: moment().format("cprDDMMYYYYhhmm"),
                                    },
                                  ],
                                  itemdetails: [],
                                  imageurl: [
                                    {
                                      url: "https://prodpublic.s3.ap-south-1.amazonaws.com/RCF/" + vi.visitId + "-rpt.pdf"
                                    }
                                  ]
                                }

                                if (visit.medicines) {
                                  var orderamount = 0
                                  var mlist = _.filter(
                                    visit.medicines,
                                    function (m) {
                                      return m.sku;
                                    },
                                  );

                                  _.forEach(mlist, function (m) {

                                    console.log("🚀 ~ m:", m)
                                    var day = m.dlist.length ? m.dlist.length : 1;
                                    var isTablet = m.medicineType === "Tablet"
                                    var totalDuration = m.days;
                                    var qty = 0;
                                    m.qtyArray
                                      .toString()
                                      .split(",")
                                      .forEach(
                                        (ele) => (qty = qty + parseInt(ele)),
                                      );
                                    strips = Math.ceil(
                                      (day * qty * totalDuration) / m.mou,
                                    );
                                    var totalQty = isTablet ? strips * m.mou : m.mou
                                    var mrp = m.mrp
                                    var disValue = (m.mrp * discpercent / 100) || 0
                                    var splmrp = (mrp - disValue).toFixed(2)
                                    var discamount = (mrp - splmrp).toFixed(2)
                                    var totalamount = (splmrp * totalQty).toFixed(2)
                                    orderamount += parseFloat(totalamount);
                                    apr.itemdetails.push({
                                      itemid: m.sku,
                                      itemname: m.name,
                                      quantity: totalQty,
                                      packsize: m.mou,
                                      discpercent,
                                      discamount,
                                      mrp,
                                      splmrp,
                                      totalamount,
                                      Status: m.status || '',
                                      comment: "Urgent Delivery",
                                      preferred_batch: "preferred_batch",
                                      fullfillment_type: "fulfillment_type",
                                      fullfillment_site: "fulfillment_site",
                                      barcode: "barcode",
                                      itemlength: "",
                                      itemwidth: "10",
                                      itemheight: "10",
                                      isdpco: true,
                                      patientname: v.patientName,
                                      drname: v.doctorName,
                                    });
                                  });
                                  var statecityList = require("../statecode.json");
                                  const state = statecityList.find(
                                    (state) =>
                                      state.name === v.patient.address.state,
                                  );
                                  let stateCode = 0
                                  if (state && state.code) stateCode = state.code
                                  console.log('v.patient.address.state', v.patient.address.state, state)
                                  apr.orderamount = orderamount
                                  apr.paymentdetails[0].amount = orderamount
                                  apr.customerdetails.billingstateid = stateCode
                                  apr.customerdetails.shippingstateid = stateCode
                                    console.log('Before api call', JSON.stringify(apr))
                                  const axios = require("axios");

                                  // Visit.PlaceOrderForOrangeOmsRbi - response
                                  
                                  axios({
                                    method: "POST",
                                    url: hi.APOLLO_API_URL,
                                    headers: {
                                      "Auth-Token": hi.PLACEORDERTOKEN_RBI,
                                      Cookie: hi.PLACEORDERCOOKIE_RBI,
                                      VENDORID: hi.PLACEORDERVENDORID_RBI,
                                      VENDORNAME: "RBI",
                                    },
                                    data: apr,
                                  })
                                    .then(function (response) {

                                      console.log("🚀 ~ response:", response.data)
                                      console.log('🚀 API call for rbi is done using orang oms');
                                      if (response.data.Status) {
                                        apr.orderStatus = true;
                                        apr.ReferenceNo = response.data.ReferenceNo;
                                      } else if (
                                        response.data.Message ===
                                        "ORDER ID ALREADY EXITS"
                                      ) {
                                        apr.orderStatus = true;
                                      } else {
                                        console.log(
                                          "error",
                                          response.data.Message,
                                        );
                                        apr.orderStatus = false;
                                      }
                                    })
                                    .catch(function (error) {
                                      console.log(
                                        `error with api ${hi.APOLLO_API_URL}`,
                                        error,
                                      );
                                      apr.orderStatus = false;
                                    })
                                    .finally(function () {
                                      console.log('Inside finally Block', apr)
                                      hi.mongo.visits.findAndModify(
                                        { aptId: vi.aptId },
                                        [],
                                        {
                                          $set: {
                                            orderReference: apr.ReferenceNo,
                                          },
                                        },
                                        { new: true },
                                        function (err, result) {
                                          if (err)
                                            return res.status(500).json({
                                              status: 500,
                                              message: "Internal Error. E009",
                                            });
                                          VisitController.closeVisit(
                                            req.user.id,
                                            vi.aptId,
                                            vi.visitId,
                                            function (err) {
                                              if (err)
                                                return res.status(500).json({
                                                  status: 500,
                                                  message: "Internal Error. E010",
                                                });
                                              Visit.addOrder(
                                                apr,
                                                function (errinorder, result) {
                                                  if (errinorder) {
                                                  }
                                                  return res.status(200).json({
                                                    status: 200,
                                                    message:
                                                      "Order creation successful.",
                                                  });
                                                },
                                              );
                                            },
                                          );
                                        },
                                      );
                                    })
                                }
                              } catch (err) {
                                console.log('Inside catch Block', err)
                                apr.orderStatus = false;
                              }
                            } else {
                              try {
                                var address1 = "Rajam";
                                var address2 = "Rajam";
                                var city = "Rajam";
                                var pincode = "532127";
                                var apr = {
                                  orderid: vi.visitId,
                                  deliverytype: "CR",
                                  orderdate: moment().format(
                                    "YYYY-MM-DD hh:mm:ss",
                                  ),
                                  couponcode: null,
                                  vendorname: "GMRV",
                                  drname: v.doctor.name,
                                  prescriptionurl:
                                    "https://prodpublic.s3.ap-south-1.amazonaws.com/RCF/" +
                                    vi.visitId +
                                    "-rpt.pdf",
                                  shippingmethod: "Storepickup",
                                  paymentmethod: "COD",
                                  // prefferedsite: "14055", // is that shop ID
                                  prefferedsite: "19103", // is that shop ID
                                  ordertype: "CART",
                                  orderamount: 0.01, // application dont knwo what is order amount
                                  createddatetime: null,
                                  deliverydate: "", // delivery date we dont know
                                  timeslot: "", // time slot also application dont know
                                  shippingcharges: 0.0,
                                  categorytype: "Pharma", // what value will come this and ordertype is same or diff
                                  landmark: "", // what is landmark value
                                  customercomment:
                                    "Need all medicine and for duration as per prescription", // this option is not there
                                  issubscribe: false,
                                  tattype: "",
                                  appversion: "",
                                  customertype: "Normal Priority",
                                  customerpriority: "",
                                  customercategory: "",
                                  customermisc1: "",
                                  customermisc2: "",
                                  ordermisc1: "",
                                  orderchannel: "AP_IN",
                                  ordermisc2: "",
                                  clusterid: "",
                                  additionalmisc1: "",
                                  additionalmisc2: "",
                                  distancekm: 0.0,
                                  parentorderid: "",
                                  splits: 1,
                                  siblingorderids: "",
                                  parentorderamount: 0.0,
                                  preferreddsp: "test",
                                  fulfilmenttype: "test",
                                  modeofdelivery: "test",
                                  allocatedstorecity: "test",
                                  allocatedstoretype: "test",
                                  allocatedclustername: "test",
                                  allocatedtatduration: "test",
                                  allocatedtatlogic: "test",
                                  promisetype: "test",
                                  membershipclass: "Circle_Monthly",
                                  iscircleorder: "true",
                                  noncartclassification: "test",
                                  substitutionaprroval: "",
                                  comment2: "test",
                                  comment3: "test",
                                  pickupotp: "5463",
                                  fwdreturnotp: "5484",
                                  revreturnotp: "5557",
                                  transactionid: "",
                                  noncarttype: "",
                                  customerdetails: {
                                    billingaddress:
                                      address1 +
                                      ", " +
                                      address2 +
                                      ", " +
                                      city,
                                    billingpincode: pincode,
                                    billingcity: city,
                                    billingstateid: "TS",
                                    shippingaddress:
                                      address1 +
                                      ", " +
                                      address2 +
                                      ", " +
                                      city,
                                    shippingpincode: pincode,
                                    shippingcity: city,
                                    shippingstateid: "TS",
                                    customerid: "",
                                    patiendname: v.patient.name,
                                    customername: v.patient.name,
                                    primarycontactno: v.patient.mobile,
                                    secondarycontactno: v.patient.mobile,
                                    age: moment().diff(v.patient.dob, "years"),
                                    emailid: "",
                                    cardno: "0",
                                    latitude: 17.4796455,
                                    longitude: 78.5127157,
                                  },
                                  paymentdetails: [],
                                  itemdetails: [],
                                  imageurl: [
                                    {
                                      url:
                                        "https://prodpublic.s3.ap-south-1.amazonaws.com/RCF/" +
                                        vi.visitId +
                                        "-rpt.pdf",
                                    },
                                  ],
                                };
                                if (v.patient.address && Object.keys(v.patient.address).length) {
                                  address1 = v.patient.address.address1;
                                  address2 = v.patient.address.address2;
                                  city = v.patient.address.city;
                                  pincode = v.patient.address.pincode;
                                }

                                if (visit.medicines) {
                                  var mlist = _.filter(
                                    visit.medicines,
                                    function (m) {
                                      return m.sku;
                                    },
                                  );
                                  _.forEach(mlist, function (m) {
                                    var day = m.dlist.length ? m.dlist.length : 1;
                                    var totalDuration = m.days;
                                    var qty = 0;
                                    m.qtyArray
                                      .toString()
                                      .split(",")
                                      .forEach(
                                        (ele) => (qty = qty + parseInt(ele)),
                                      );
                                    strips = Math.ceil(
                                      (day * qty * totalDuration) / m.mou,
                                    );
                                    var totalQuantity = strips * m.mou;
                                    apr.itemdetails.push({
                                      itemid: m.sku,
                                      itemname: m.name,
                                      quantity: totalQuantity,
                                      MOU: m.mou,
                                      packsize: strips,
                                      discpercent: 0,
                                      discamount: 0,
                                      mrp: m.mrp,
                                      splmrp: m.mrp,
                                      Status: m.status,
                                      comment: "Urgent Delivery" + v.urgent,
                                    });
                                  });
                                  var statecityList = require("../statecode.json");
                                  const state = statecityList.find(
                                    (state) =>
                                      state.id === v.patient.address.state,
                                  );
                                  apr.customerdetails.billingstateid = state.code;
                                  apr.customerdetails.shippingstateid =
                                    state.code;
                                  const axios = require("axios");
                                  axios({
                                    method: "POST",
                                    url: hi.APOLLO_API_URL,
                                    // timeout: 1000 * 10,
                                    headers: {
                                      "Auth-Token": hi.PLACEORDERTOKEN,
                                      name: hi.PLACEORDERNAME,
                                      VENDORID: hi.PLACEORDERVENDORID,
                                    },
                                    data: apr,
                                  })
                                    .then(function (response) {

                                      console.log("🚀 ~ response:", response)
                                      console.log('🚀 API call for grmvch is done using orang oms');                                 
                                      if (response.data.ordersResult.Status) {
                                        apr.orderStatus = true;
                                        apr.ReferenceNo = response.data.ReferenceNo;
                                      } else if (
                                        response.data.Message ===
                                        "ORDER ID ALREADY EXITS"
                                      ) {
                                        apr.orderStatus = true;
                                      } else {
                                        console.log(
                                          "error",
                                          response.data.Message,
                                        );
                                        apr.orderStatus = false;
                                      }
                                    })
                                    .catch(function (error) {
                                      console.log(
                                        `error with api ${hi.APOLLO_API_URL}`,
                                        error,
                                      );
                                      apr.orderStatus = false;
                                    });
                                }
                              } catch (err) {
                                console.log('Inside catch Block', err)
                                apr.orderStatus = false;
                              } finally {
                                console.log('Inside finally Block', apr)
                                hi.mongo.visits.findAndModify(
                                  { aptId: vi.aptId },
                                  [],
                                  {
                                    $set: {
                                      orderReference: apr.ReferenceNo,
                                    },
                                  },
                                  { new: true },
                                  function (err, result) {
                                    if (err)
                                      return res.status(500).json({
                                        status: 500,
                                        message: "Internal Error. E009",
                                      });
                                    VisitController.closeVisit(
                                      req.user.id,
                                      vi.aptId,
                                      vi.visitId,
                                      function (err) {
                                        if (err)
                                          return res.status(500).json({
                                            status: 500,
                                            message: "Internal Error. E010",
                                          });

                                        Visit.addOrder(
                                          apr,
                                          function (errinorder, result) {
                                            if (errinorder) {
                                            }
                                            return res.status(200).json({
                                              status: 200,
                                              message:
                                                "Order creation successful.",
                                            });
                                          },
                                        );
                                      },
                                    );
                                  },
                                );
                              }
                            }
                          },
                        );
                      });
                    }
                  });
                });
            });
          });
        } else
          VisitController.closeVisit(
            req.user.id,
            vi.aptId,
            vi.visitId,
            function (err) {
              if (err)
                return res
                  .status(500)
                  .json({ status: 500, message: "Internal Error." });
              return res.status(200).json({ status: 200 });
            },
          );
        // });
      } else
        VisitController.closeVisit(
          req.user.id,
          vi.aptId,
          vi.visitId,
          function (err) {
            if (err)
              return res
                .status(500)
                .json({ status: 500, message: "Internal Error." });
            return res.status(200).json({ status: 200 });
          },
        );
    });
  },