/**
 * #42: https://github.com/akshitagit/JavaScript/issues/42
 * Name: hollowRhombus
 * Author: ngdangtu
 * Standard: c++2a
 * 	g++ hollowRhombus.cpp --std=c++2a
 */
#include <iostream>
#include <string>

#include "headers/Canvas.hpp"

using std::cout;
using std::endl;

bool verifyInput(char *[], int);

void ifInputValid(int size, Pixel pixel)
{
	Canvas canvas{size, pixel};
	printf("Here is %dx%d diamon shape: ", size, size);
	cout << endl;
	canvas.draw();
	cout << endl;
}

int main(int argc, char *argv[])
{
	bool isInputValid = verifyInput(argv, argc);
	if (isInputValid)
	{
		int shapeSize = std::stoi(argv[1]);
		ifInputValid(shapeSize, {'*', ' '});
		return 0;
	}

	cout << endl;
	return 1; // Fail to execute
}
