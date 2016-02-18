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
            limit: 134,
            min: [0, 0],
            max: [maze[0].length, maze.length],
            currentX: 1,
            currentY: 0,
            direction: 0,
            path: [],
            exit: false,
            findWall: function () {
                // if (this.cycle < this.limit) {
                    // this.cycle = this.cycle + 1;

                    
                    // Ищет стену справа (взависимости от направления движения)
                    // console.log('');
                    // console.log('/----Найти стену---/');

                    // Двигаюсь вперед, стена справа
                    if (this.direction === 0) {
                        if (maze[this.currentY][this.currentX - 1] !== -1) {
                            this.currentX = this.currentX - 1;
                            this.path.push([this.currentX, this.currentY]);

                            // console.log('Ищу стену справа');

                            // Если вышел на угол, движение назад
                            if (maze[this.currentY - 1][this.currentX] === 0) {
                                this.currentY = this.currentY - 1;
                                this.path.push([this.currentX, this.currentY]);
                                this.direction = 180;
                            }

                            this.findWall();
                        } else {
                            // console.log('Стена справа');
                            // console.log('/----Найти стену---/');
                            this.getDirection();
                        }
                    }

                    // Двигаюсь вправо, стена снизу
                    if (this.direction === 90) {
                        if (maze[this.currentY - 1][this.currentX] !== -1) {
                            this.currentY = this.currentY - 1;
                            this.path.push([this.currentX, this.currentY]);

                            // console.log('Ищу стену снизу');

                            // Если вышел на угол, движение назад
                            if (maze[this.currentY - 1][this.currentX] === 0) {
                                this.currentY = this.currentY - 1;
                                this.path.push([this.currentX, this.currentY]);
                                this.direction = 180;
                            }

                            this.findWall();
                        } else {
                            // console.log('Стена снизу');
                            // console.log('/----Найти стену---/');
                            this.getDirection();
                        }
                    }

                    // Двигаюсь назад, стена слева
                    if (this.direction === 180) {
                        if (maze[this.currentY][this.currentX + 1] !== -1) {
                            this.currentX = this.currentX + 1;
                            this.path.push([this.currentX, this.currentY]);

                            // console.log('Ищу стену слева');

                            // Если вышел на угол, движение вперед
                            if (maze[this.currentY + 1][this.currentX] === 0) {
                                this.currentY = this.currentY + 1;
                                this.path.push([this.currentX, this.currentY]);
                                this.direction = 0;
                            } 
                            
                            this.findWall();
                        } else {
                            // console.log('Стена слева');
                            // console.log('/----Найти стену---/');
                            this.getDirection();
                        }
                    }

                    // Двигаюсь влево, стена спереди
                    if (this.direction === 270) {
                        if (maze[this.currentY + 1][this.currentX] !== -1) {
                            this.currentY = this.currentY + 1;
                            this.path.push([this.currentX, this.currentY]);

                            // console.log('Ищу стену спереди');

                            // Проверить на выход
                            this.ifExit();

                            // Если вышел на угол, движение вперед
                            if (maze[this.currentY + 1][this.currentX] === 0) {
                                this.currentY = this.currentY + 1;
                                this.path.push([this.currentX, this.currentY]);
                                this.direction = 0;
                            }

                            this.findWall();
                        } else {
                            // console.log('Стена спереди');
                            // console.log('/----Найти стену---/');
                            this.getDirection();
                        }
                    }
                // } else {
                    // console.log('Превышен лимит запусков');
                    // return false;
                // }
            },
            getDirection: function () {
                // if (this.cycle < this.limit) {
                    // this.cycle = this.cycle + 1;

                    // Получить направление движения взависимости от текущего положения и текущего направления
                    // console.log('');
                    // console.log('/---Получить направление--/');

                    // Двигаюсь вперед
                    if (this.direction === 0) {
                        // console.log('Текущее направление - вперед');

                        if(maze[this.currentY + 1][this.currentX] === -1) {
                            this.direction = 270;

                            // console.log('Новое направление - влево');
                        }
                    }

                    // Двигаюсь вправо
                    if (this.direction === 90) {
                        // console.log('Текущее направление - вправо');

                        if(maze[this.currentY][this.currentX - 1] === -1) {
                            this.direction = 0;

                            // console.log('Новое направление - вперед');
                        }
                    }

                    // Двигаюсь назад
                    if (this.direction === 180) {
                        // console.log('Текущее направление - назад');

                        if(maze[this.currentY - 1][this.currentX] === -1) {
                            this.direction = 90;

                            // console.log('Новое направление - вправо');
                        }
                    }

                    // Двигаюсь влево
                    if (this.direction === 270) {
                        // console.log('Текущее направление - влево');

                        if (maze[this.currentY][this.currentX + 1] === -1) {
                            this.direction = 180;

                            // console.log('Новое направление - назад');
                        }
                    }

                    // console.log('/---Получить направление--/');
                    this.walk();
                // } else {
                    // console.log('Превышен лимит запусков');
                    // return false;
                // }  
            },
            walk: function () {
                if (this.cycle < this.limit) {
                    this.cycle = this.cycle + 1;

                    // Сделать шаг взависимости от направления
                    // console.log('');
                    // console.log('/---Иду---/');

                    // Иду вперед
                    if (this.direction === 0) {
                        // console.log('Вперед');

                        this.currentY = this.currentY + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Иду вправо
                    if (this.direction === 90) {
                        // console.log('Вправо');

                        this.currentX = this.currentX - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Иду назад
                    if (this.direction === 180) {
                        // console.log('Назад');

                        this.currentY = this.currentY - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Иду Влево
                    if (this.direction === 270) {
                        // console.log('Влево');

                        this.currentX = this.currentX + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // console.log('/---Иду---/');
                    console.log('-------------');
                    console.log(this.currentX);
                    console.log(this.currentY);
                    this.findWall();
                } else {
                    console.log('Превышен лимит запусков');
                    return false;
                }   
            },
            ifExit: function () {
                // Проверка на выход
                if (this.currentY + 1 === this.max[1]) {
                    this.exit = true;
                    console.log('Выход');
                }
            },
            init: function () {
                this.findWall();
            }
        };

        walker.init();

        return walker.path;
    }

    root.maze.solution = solution;
})(this);
