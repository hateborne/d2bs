#include "D2BS.h"
#include "string.h"

#include "debugnew/debug_new.h"

INT StringTokenize(CHAR * input, CHAR separator, CHAR ** tokenbuf, INT maxtokens)
{
	CHAR * p = _strdup(input), * j = p;
	INT i = 0;
	do {
		tokenbuf[i] = (input + (p - j));
		p = strchr(p, separator);
		if(p)
			*(p++) = 0;
	} while (p && ++i < maxtokens);
	free(j); 
	return ++i;
}

wchar_t* AnsiToUnicode(const char* str)
{
	wchar_t* buf = NULL;
	int len = MultiByteToWideChar(CP_ACP, 0, str, -1, buf, 0);
	buf = new wchar_t[len];
	MultiByteToWideChar(CP_ACP, 0, str, -1, buf, len);
	return buf;
}

char* UnicodeToAnsi(const wchar_t* str)
{
	char* buf = NULL;
	int len = WideCharToMultiByte(CP_ACP, 0, str, -1, buf, 0, "?", NULL);
	buf = new char[len];
	WideCharToMultiByte(CP_ACP, 0, str, -1, buf, len, "?", NULL);
	return buf;
}

bool StringToBool(const char* str)
{
	switch(tolower(str[0]))
	{
		case 't': case '1':
			return true;
		case 'f': case '0': default:
			return false;
	}
}

void StringReplace(char* str, const char find, const char replace)
{
	char* c = str;
	do {
		if(*c == find)
			*c = replace;
	} while(*(++c) != '\0');
}