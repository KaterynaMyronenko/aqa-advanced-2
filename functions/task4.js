function divide(numerator, denominator) {
    const devided = numerator / denominator
    return devided
}

try {
    const result = divide(1, 6)
    if (result != 0 && result) {
        console.log('result: ', result)
    } else {
        throw new Error('Something went wrong')
    }
} catch (e) {
    console.log(e.message)
} finally {
    console.log('End')
}
