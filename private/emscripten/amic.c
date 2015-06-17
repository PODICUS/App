#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
	int limit, n1, n2, chk, counter;
	sscanf(argv[1], "%d", &counter);
	sscanf(argv[2], "%d", &limit);
	while (counter < limit) {
		int sum = 0;
		int div = 0;
		++counter;
		while (div <= counter/2) {
			++div;
			if ( counter % div == 0 )
				sum += div;
		}
		chk = sum;
		sum = div = 0;
		while (div <= chk/2) {
			++div;
			if ( chk % div == 0 )
				sum += div;
		}
		if ( sum == counter ) {
			if ( counter == chk ) continue;
			n1 = counter;
			if ( n1 == n2) continue;
			n2 = chk;
			int min = n1<n2?n1:n2,max = n1<n2?n2:n1;
			printf("[%d, %d]\n",min,max);
		}
	}
	return 0;
}