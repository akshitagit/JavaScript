#include <iostream>
#include <string>

using std::string;

bool isOddInLimRange(string input)
{
	int number = std::stoi(input);
	bool isOdd = (number % 2) > 0;
	bool isInLimRange = (number > 0) && (number < 10);
	return isOdd && isInLimRange;
}

bool verifyInput(char *inputArray[], int inSize)
{
	if (inSize != 2)
	{
		printf("This program requires only 1 numeric input to excute.");
		return false;
	}
	else
	{
		bool oddAndLimited = isOddInLimRange(inputArray[1]);
		if (!oddAndLimited)
		{
			printf("Please enter an odd number in range from 0 to 10.");
			return false;
		}
		else
		{
			return true;
		}
	}
}