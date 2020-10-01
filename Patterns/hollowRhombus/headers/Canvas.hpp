#ifndef CANVAS_H
#define CANVAS_H

#include <string>

using std::string;

struct CanvasSize
{
	int width;
	int height;
};

struct PointerPosition
{
	int x;
	int y;
};

struct Area
{
	int start;
	int end;
};

struct Pixel
{
	char solid;
	char hollow;
};

class Canvas
{
private:
	CanvasSize size;
	CanvasSize conSize;
	Pixel block;

protected:
	void calcContentSize();
	bool isInContent(PointerPosition);
	string addFrame(PointerPosition);
	string addShape(PointerPosition);
	string addBlock(char);
	string addBlock(char, char);

public:
	Canvas(int canvasSize, Pixel pixelType);
	void draw();
	std::string generate();
};

#endif