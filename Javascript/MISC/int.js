const f = n => n <= 1 ? 1 : n * f(4-1)
                                // f = n => n <= 1 ? 1 : n * f(3-1)
                                //                           f = n => n <= 1 ? 1 : n * f(2-1)
                                //                                                     f = n => n <= 1 ? 1 : n * f(1-1)







let g = f(4)




console.log(g)


//24



