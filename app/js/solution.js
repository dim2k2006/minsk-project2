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
        // var walker = {
        //     min: [0, 0],
        //     max: [maze[0].length, maze.length - 1],
        //     currentX: 1,
        //     currentY: 0,
        //     direction: 0,
        //     path: [],
        //     findWall: function () {
        //         // Ищет стену справа (взависимости от направления движения)

        //         // Двигаюсь вперед, стена справа
        //         if (this.direction === 0) {
        //             if (maze[this.currentY][this.currentX - 1] !== -1) {
        //                 this.currentX = this.currentX - 1;
        //                 this.path.push([this.currentX, this.currentY]);

        //                 // console.log('Ищу стену справа');

        //                 // Если вышел на угол, движение назад
        //                 if (maze[this.currentY - 1][this.currentX] === 0) {
        //                     this.currentY = this.currentY - 1;
        //                     this.path.push([this.currentX, this.currentY]);
        //                     this.direction = 180;
        //                 }

        //                 this.findWall();
        //             } else {
        //                 // console.log('Стена справа');
        //                 // console.log('/----Найти стену---/');
        //                 this.getDirection();
        //             }
        //         }

        //         // Двигаюсь вправо, стена снизу
        //         if (this.direction === 90) {
        //             if (maze[this.currentY - 1][this.currentX] !== -1) {
        //                 this.currentY = this.currentY - 1;
        //                 this.path.push([this.currentX, this.currentY]);

        //                 // console.log('Ищу стену снизу');

        //                 // Если вышел на угол, движение назад
        //                 if (maze[this.currentY - 1][this.currentX] === 0) {
        //                     this.currentY = this.currentY - 1;
        //                     this.path.push([this.currentX, this.currentY]);
        //                     this.direction = 180;
        //                 }

        //                 this.findWall();
        //             } else {
        //                 // console.log('Стена снизу');
        //                 // console.log('/----Найти стену---/');
        //                 this.getDirection();
        //             }
        //         }

        //         // Двигаюсь назад, стена слева
        //         if (this.direction === 180) {
        //             if (maze[this.currentY][this.currentX + 1] !== -1) {
        //                 this.currentX = this.currentX + 1;
        //                 this.path.push([this.currentX, this.currentY]);

        //                 // console.log('Ищу стену слева');

        //                 // Если вышел на угол, движение вперед
        //                 if (maze[this.currentY + 1][this.currentX] === 0) {
        //                     this.currentY = this.currentY + 1;
        //                     this.path.push([this.currentX, this.currentY]);
        //                     this.direction = 0;
        //                 } 
                        
        //                 this.findWall();
        //             } else {
        //                 // console.log('Стена слева');
        //                 // console.log('/----Найти стену---/');
        //                 this.getDirection();
        //             }
        //         }

        //         // Двигаюсь влево, стена спереди
        //         if (this.direction === 270) {
        //             if (this.currentY + 1 <= this.max[1]) {
        //                 if (maze[this.currentY + 1][this.currentX] !== -1) {
        //                     this.currentY = this.currentY + 1;
        //                     this.path.push([this.currentX, this.currentY]);

        //                     // console.log('Ищу стену спереди');

        //                     // Если вышел на угол, движение вперед
        //                     if (this.currentY + 1 <= this.max[1]) {
        //                         if (maze[this.currentY + 1][this.currentX] === 0) {
        //                             this.currentY = this.currentY + 1;
        //                             this.path.push([this.currentX, this.currentY]);
        //                             this.direction = 0;
        //                         }
        //                     }

        //                     this.findWall();
        //                 } else {
        //                     // console.log('Стена спереди');
        //                     // console.log('/----Найти стену---/');
        //                     this.getDirection();
        //                 }
        //             } else {
        //                 console.log('Выход');
        //                 return;
        //             }
        //         }
        //     },
        //     getDirection: function () {
        //         // Двигаюсь вперед
        //         if (this.direction === 0) {
        //             if(maze[this.currentY + 1][this.currentX] === -1) {
        //                 this.direction = 270;
        //             }
        //         }

        //         // Двигаюсь вправо
        //         if (this.direction === 90) {
        //             if(maze[this.currentY][this.currentX - 1] === -1) {
        //                 this.direction = 0;
        //             }
        //         }

        //         // Двигаюсь назад
        //         if (this.direction === 180) {
        //             if(maze[this.currentY - 1][this.currentX] === -1) {
        //                 this.direction = 90;
        //             }
        //         }

        //         // Двигаюсь влево
        //         if (this.direction === 270) {
        //             if (maze[this.currentY][this.currentX + 1] === -1) {
        //                 this.direction = 180;
        //             }
        //         }

        //         this.walk();
        //     },
        //     walk: function () {
        //         // Иду вперед
        //         if (this.direction === 0) {
        //             this.currentY = this.currentY + 1;
        //             this.path.push([this.currentX, this.currentY]);
        //         }

        //         // Иду вправо
        //         if (this.direction === 90) {
        //             this.currentX = this.currentX - 1;
        //             this.path.push([this.currentX, this.currentY]);
        //         }

        //         // Иду назад
        //         if (this.direction === 180) {
        //             this.currentY = this.currentY - 1;
        //             this.path.push([this.currentX, this.currentY]);
        //         }

        //         // Иду Влево
        //         if (this.direction === 270) {
        //             this.currentX = this.currentX + 1;
        //             this.path.push([this.currentX, this.currentY]);
        //         }

        //         this.findWall();  
        //     },
        //     init: function () {
        //         this.findWall();
        //     }
        // };

        // walker.init();

        if (typeof solution.path === 'undefined') {
            // Устанавливаем переменные

            // Устанавливаем объект walker
            var walker = {
                min: [0, 0],
                max: [maze[0].length, maze.length - 1],
                currentX: 1,
                currentY: 0,
                direction: 0,
                path: [],
                findWall: function () {
                    // Ищет стену справа (взависимости от направления движения)

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
                        if (this.currentY + 1 <= this.max[1]) {
                            if (maze[this.currentY + 1][this.currentX] !== -1) {
                                this.currentY = this.currentY + 1;
                                this.path.push([this.currentX, this.currentY]);

                                // console.log('Ищу стену спереди');

                                // Если вышел на угол, движение вперед
                                if (this.currentY + 1 <= this.max[1]) {
                                    if (maze[this.currentY + 1][this.currentX] === 0) {
                                        this.currentY = this.currentY + 1;
                                        this.path.push([this.currentX, this.currentY]);
                                        this.direction = 0;
                                    }
                                }

                                this.findWall();
                            } else {
                                // console.log('Стена спереди');
                                // console.log('/----Найти стену---/');
                                this.getDirection();
                            }
                        } else {
                            console.log('Выход');
                            return;
                        }
                    }
                },
                getDirection: function () {
                    // Двигаюсь вперед
                    if (this.direction === 0) {
                        if(maze[this.currentY + 1][this.currentX] === -1) {
                            this.direction = 270;
                        }
                    }

                    // Двигаюсь вправо
                    if (this.direction === 90) {
                        if(maze[this.currentY][this.currentX - 1] === -1) {
                            this.direction = 0;
                        }
                    }

                    // Двигаюсь назад
                    if (this.direction === 180) {
                        if(maze[this.currentY - 1][this.currentX] === -1) {
                            this.direction = 90;
                        }
                    }

                    // Двигаюсь влево
                    if (this.direction === 270) {
                        if (maze[this.currentY][this.currentX + 1] === -1) {
                            this.direction = 180;
                        }
                    }

                    this.walk();
                },
                walk: function () {
                    // Иду вперед
                    if (this.direction === 0) {
                        this.currentY = this.currentY + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Иду вправо
                    if (this.direction === 90) {
                        this.currentX = this.currentX - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Иду назад
                    if (this.direction === 180) {
                        this.currentY = this.currentY - 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    // Иду Влево
                    if (this.direction === 270) {
                        this.currentX = this.currentX + 1;
                        this.path.push([this.currentX, this.currentY]);
                    }

                    this.findWall();  
                },
                init: function () {
                    this.findWall();
                }
            };

            // Инициализируем объект walker
            walker.init();

            // Получаем эталонный массив данных
            solution.path = walker.path;

            // Инициализируем динамический массив данных
            solution.pathDynamic = [
                [x, y]
            ];

            // Получаем длинну массива с данными
            solution.pathLength = solution.path.length;

            // Инициализируем счетчик
            solution.pathCounter = 0;

            // Карта
            solution.maze = maze;

            // Перезапускаем функцию
            setTimeout(solution, 0);
        } else {
            // Все переменные установлены

            // Проверяем что счетчик меньше длины эталонного масива
            if (solution.pathCounter < solution.pathLength) {
                // Добавляем в динамический массив данные из эталонного масива с индексом текущего счетчика
                solution.pathDynamic.push(solution.path[solution.pathCounter]);

                // Инкрементируем счетчик
                solution.pathCounter = solution.pathCounter + 1;

                // Перезапускаем функцию
                setTimeout(solution, 1000);
            }   
        }

        if (solution.pathCounter && solution.pathLength && solution.pathCounter <= solution.pathLength) {
            var oldChild = document.querySelector('.outer .maze'),
                newChild = root.maze.render(solution.maze, solution.pathDynamic);

            document.querySelector('.outer').replaceChild(newChild, oldChild);
        } else {
            return [
                [x, y]
            ];
        }

    }

    root.maze.solution = solution;
})(this);
