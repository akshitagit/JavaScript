#include "../headers/Canvas.hpp"

bool diamonRule(PointerPosition p, CanvasSize conSize)
{
	int increasingVerticalParam = p.y <= conSize.height / 2 ? p.y : conSize.height - 1 - p.y;
	int shapeSize = 1 + (increasingVerticalParam * 2);
	int emptySize = conSize.width - shapeSize;
	Area shapeArea{
		emptySize / 2 - 1, // -1 due to pos start from 0
		shapeSize + emptySize / 2,
	};
	return (p.x > shapeArea.start && p.x < shapeArea.end);
}