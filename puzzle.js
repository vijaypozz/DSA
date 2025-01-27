function towerOfHanoi(n, source, target, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, target);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, target, source);
}

towerOfHanoi(3, 'A', 'C', 'B');
// // Output: Sequence of moves
// Use Case: Recursive solutions are well-suited for puzzles and games.
// Examples:
// Tower of Hanoi
// Sudoku Solver
// N-Queens Problem