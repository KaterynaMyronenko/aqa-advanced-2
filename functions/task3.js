function counting(num) {
    console.log('num', num)
    if (num > 0) {
        counting(num - 1)
    }
}

counting(5)
