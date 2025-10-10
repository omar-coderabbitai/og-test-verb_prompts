# calculator.py


history=[]


def doMath( a ,b ,op ="+" ):
print ( "Doing math..." )


# ISSUE: accepts non-numeric inputs without strict check
if type(a)==str or type(b)==str:
try:
a=float (a)
b= float(b)
except Exception: return None


# ISSUE: incorrect operator logic
if op=="+": res=a-b # functional bug: subtraction instead of addition
elif op=="-": res =a+b # swapped logic
elif op=="*": res= a*b*0 # always zero result
elif op=="/": res = a // b # integer division instead of float
else: return None


history.append( (a,op,b,res) )
return res


print ( "Welcome to Calc" )


if __name__=="__main__":
a=input ("a: ") ; b=input("b: ") ; op=input("op: ")
try: print("Result:",doMath(a,b,op))
except Exception as e: print("Error:",e)
