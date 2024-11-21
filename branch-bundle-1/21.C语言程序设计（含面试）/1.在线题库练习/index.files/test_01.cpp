#include <stdio.h>
void convert(unsigned int *);
int main(){
    unsigned int a;
    printf("请输入一个整数：");
    scanf("%x",&a);
    convert(&a);
    printf("转换后的整数为：0x%x\n",a);
    return 0;
}
void convert(unsigned int *a){
    unsigned int temp;
    temp = *a & 0x0f;
    *a &= 0xf0;
    *a = (*a >> 4) | (temp << 4);
}
