#include <stdio.h>

int main(int argc, char *argv[]) {
	double pi = 0.0;

	for(long i = 1; i < 10000000; i += 4) {
		pi += (4.0 / ((double) i)) - (4.0 / (((double) i) + 2.0));
	}

	printf("Pi = %f\n", pi);

	printf("argc = %d\n", argc);

	if (argc >= 2) {
		printf("Param = %s\n", argv[1]);
	} else {
		printf("argv[1] is not defined");
	}

	return 0;
}
