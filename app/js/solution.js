(function (root) {
    var EMPTY = root.maze.EMPTY;
    var WALL = root.maze.WALL;
    var PATH = root.maze.PATH;
    var CURRENT = root.maze.CURRENT;

    /**
     * Функция находит путь к выходу и возвращает найденный маршрут
     *
     * @param {number[][]} maze карта лабиринта представленная двумерной матрицей чисел
     * @param {number} x координата точки старта по оси X
     * @param {number} y координата точки старта по оси Y
     * @returns {[number, number][]} маршрут к выходу представленный списоком пар координат
     */
    function solution(maze, x, y) {
        // todo: построить правильный маршрут к выходу
        var walker = {
            cycle: 0,
            limit: 200,
            min: [0, 0],
            max: [maze[0].length, maze.length],
            currentX: 1,
            currentY: 0,
            path: [],
            walkStraightRight: function () {
                while (true) {
                    // Предел запусков
                    if (this.cycle > this.limit) {
                        console.log('Превышен предел запусков');
                        break;
                    }

                    this.cycle = this.cycle + 1;
                    

                    // Если ячейка справа 0 (пустая ячейка)
                    if (maze[this.currentY][this.currentX - 1] === 0) {
                        this.currentX = this.currentX - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }


                    // Если ячейка спереди -1 (стена) и ячейка справа -1 (стена)
                    if (maze[this.currentY + 1][this.currentX] === -1 && maze[this.currentY][this.currentX - 1] === -1) {
                        this.path.push([this.currentX, this.currentY]);
                        console.log('Движение влево-прямо');
                        this.walkLeftStraight();
                        break;
                    }

                    // Если ячейка справа -1 (стена) и ячейка спереди 0 (пустая ячейка)
                    if (maze[this.currentY][this.currentX - 1] === -1 && maze[this.currentY + 1][this.currentX] === 0) {
                        this.currentY = this.currentY + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }
                }
            },
            walkLeftStraight: function () {
                while (true) {
                    // Предел запусков
                    if (this.cycle > this.limit) {
                        console.log('Превышен предел запусков');
                        break;
                    }

                    this.cycle = this.cycle + 1;
                    

                    // Если ячейка спереди 0 (пустая ячейка)
                    if (maze[this.currentY + 1][this.currentX] === 0) {
                        this.currentY = this.currentY + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка слева 0 (пустая ячейка) и ячейка спереди -1 (стена)
                    if (maze[this.currentY][this.currentX + 1] === 0 && maze[this.currentY + 1][this.currentX] === -1) {
                        this.currentX = this.currentX + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка слева = -1 (стена)
                    if (maze[this.currentY][this.currentX + 1] === -1) {
                        console.log('Движение назад-влево');
                        this.walkBackLeft();
                        break;
                    }
                }
            },
            walkBackLeft: function () {
                while (true) {
                    // Предел запусков
                    if (this.cycle > this.limit) {
                        console.log('Превышен предел запусков');
                        break;
                    }

                    this.cycle = this.cycle + 1;
                    

                    // Если ячейка слева 0 (пустая ячейка)
                    if (maze[this.currentY][this.currentX + 1] === 0) {
                        this.currentX = this.currentX + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка слева -1 (стена) и ячейка сзади 0 (пустая ячейка)
                    if (maze[this.currentY][this.currentX + 1] === -1 && maze[this.currentY - 1][this.currentX] === 0) {
                        this.currentY = this.currentY - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка сзади -1 (стена) и ячейка слева -1 (стена)
                    if (maze[this.currentY - 1][this.currentX] === -1 && maze[this.currentY][this.currentX + 1] === -1) {
                        console.log('Движение вправо-назад');
                        this.walkRightBack();
                        break;
                    }

                    // Если ячейка сзади -1 (стена)
                    if (maze[this.currentY - 1][this.currentX] === -1) {
                        console.log('Движение влево-назад');
                        this.walkLeftBack();
                        break;
                    }
                }
            },
            walkLeftBack: function () {
                while (true) {
                    // Предел запусков
                    if (this.cycle > this.limit) {
                        console.log('Превышен предел запусков');
                        break;
                    }

                    this.cycle = this.cycle + 1;
                    

                    // Если ячейка сзади 0 (пустая ячейка)
                    if (maze[this.currentY - 1][this.currentX] === 0) {
                        this.currentY = this.currentY - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка ссзади -1 (стена) и ячейка слева 0 (пустая ячейка)
                    if (maze[this.currentY - 1][this.currentX] === -1 && maze[this.currentY][this.currentX + 1] === 0) {
                        this.currentX = this.currentX + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка слева -1 (стена)
                    if (maze[this.currentY][this.currentX + 1] === -1) {
                        console.log('Движение вперед-влево');
                        this.walkStraightLeft();
                        break;
                    }
                }
            },
            walkStraightLeft: function () {
                while (true) {
                    // Предел запусков
                    if (this.cycle > this.limit) {
                        console.log('Превышен предел запусков');
                        break;
                    }

                    this.cycle = this.cycle + 1;
                    

                    // Если ячейка слева 0 (пустая ячейка)
                    if (maze[this.currentY][this.currentX + 1] === 0) {
                        this.currentX = this.currentX + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка слева -1 (стена) и ячейка спереди 0 (пустая ячейка)
                    if (maze[this.currentY][this.currentX + 1] === -1 && maze[this.currentY + 1][this.currentX] === 0) {
                        this.currentY = this.currentY + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка спереди -1 (стена) и ячейка слева -1
                    if (maze[this.currentY + 1][this.currentX] === -1 && maze[this.currentY][this.currentX + 1] === -1) {
                        console.log('Движение вправо-вперед');
                        this.walkRightStraight();
                        break;
                    }

                    // Если ячейка спереди -1 (стена)
                    if (maze[this.currentY + 1][this.currentX] === -1) {
                        console.log('Движение влево-вперед');
                        this.walkLeftStraight();
                        break;
                    }
                }
            },
            walkRightBack: function () {
                while (true) {
                    // Предел запусков
                    if (this.cycle > this.limit) {
                        console.log('Превышен предел запусков');
                        break;
                    }

                    this.cycle = this.cycle + 1;
                    

                    // Если ячейка сзади -1 (стена) и ячейка справа 0 (пустая ячейка)
                    if (maze[this.currentY - 1][this.currentX] === -1 && maze[this.currentY][this.currentX - 1] === 0) {
                        this.currentX = this.currentX - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка сзади 0 (пустая ячейка)
                    if (maze[this.currentY - 1][this.currentX] === 0) {
                        this.currentY = this.currentY - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка сзади -1 (стена) и ячейка слева 0 (пустая ячейка)
                    if (maze[this.currentY - 1][this.currentX] === -1 && maze[this.currentY][this.currentX + 1] === 0) {
                        console.log('Движение влево-назад');
                        this.walkLeftBack();
                        break;
                    }
                }
            },
            walkRightStraight: function () {
                while (true) {
                    // Предел запусков
                    if (this.cycle > this.limit) {
                        console.log('Превышен предел запусков');
                        break;
                    }

                    this.cycle = this.cycle + 1;
                    

                    // Если ячейка справа 0 (пустая ячейка) и ячейка спереди -1 (стена)
                    if (maze[this.currentY][this.currentX - 1] === 0 && maze[this.currentY + 1][this.currentX] === -1) {
                        this.currentX = this.currentX - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Если ячейка спереди 0 (пустая ячейка)
                    if (maze[this.currentY + 1][this.currentX] === 0) {
                        this.currentY = this.currentY + 1;
                        this.path.push([this.currentX, this.currentY]);
                
                        // Если текущая ячейка ВЫХОД
                        if (this.currentY + 1 === this.max[1]) {
                            console.log('Выход');
                            break;
                        }
                    }
                }
            },
            init: function () {
                this.walkStraightRight();
            }
        };

        walker.init();


        return walker.path;
    }

    root.maze.solution = solution;
})(this);
