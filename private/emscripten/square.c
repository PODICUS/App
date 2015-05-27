#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
	long beginning = 0;
	if (argc >= 2) {
		beginning = strtol(argv[1], NULL, 10);
	} else {
		printf("argv[1] is not defined\n");
		return 1;
	}

	for(long i = beginning; i < beginning + 20; i++) {
		printf("%ld\n", i * i);
	}

	return 0;
}
