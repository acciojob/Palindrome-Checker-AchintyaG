// complete the given function

function palindrome(str){
	var str1= new String{};
	for(let i=str.length; i>0;i--)
		{
			str1=str.charAt(i);
		}
	if(str1==str)
	{
		return true;
	}
	else {
		return false;
	}
}
module.exports = palindrome
