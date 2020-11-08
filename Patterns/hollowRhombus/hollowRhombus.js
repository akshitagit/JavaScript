const diamonRule = (
    pos = { x, y },
    size = { width, height }
) => {
    const axisWidth = 1
    const increasingVerticalParam =
        pos.y <= size.height / 2 ?
            pos.y :
            size.height - 1 - pos.y
    const shapeSize = axisWidth + (increasingVerticalParam * 2)
    const emptySize = size.width - shapeSize
    const shapeArea = {
        start: emptySize / 2 - 1,
        end: shapeSize + emptySize / 2,
    }

    return (pos.x > shapeArea.start && pos.x < shapeArea.end)
}

const addCanvasShape = (
    contentPos,
    contentSize,
    block = { hollow, solid }
) => {
    const isInDiamonShape = diamonRule(contentPos, contentSize)
    if (isInDiamonShape)
        return (block.hollow + ' ')
    return (block.solid + ' ')
}

const addCanvasFrame = (
    pos = { x, y },
    size = { width, height },
    solidBlock
) => {
    const isTop = pos.y == 0
    const isRight = pos.x == 0
    const isBottom = pos.y + 1 == size.height
    const isLeft = pos.x + 1 == size.width

    if (isTop && isLeft || isLeft)
        return (solidBlock + '\n')
    else if (isTop || isRight || isBottom)
        return (solidBlock + ' ')
    return ''
}

const isInCanvasContent = (
    pos = { x, y },
    contentSize = { width, height }
) => {
    const top = pos.y >= 1
    const left = pos.x >= 1
    const right = pos.x <= contentSize.width
    const bottom = pos.y <= contentSize.height
    return top && left && right && bottom
}

const generateCanvas = (size = { width, height }, block = { hollow, solid }) => {
    const contentSize = {
        width: size.width - 2,
        height: size.height - 2
    }
    let canvas = ''

    for (let y = 0; y < size.height; y++)
        for (let x = 0; x < size.width; x++)
            canvas += isInCanvasContent({ x, y }, contentSize) ?
                addCanvasShape({ x: x - 1, y: y - 1 }, contentSize, block) :
                addCanvasFrame({ x, y }, size, block.solid)
    return canvas
}

/**
 * For NodeJs only,
 * Ignore it if you run Web GUI.
 */
module.export = generateCanvas