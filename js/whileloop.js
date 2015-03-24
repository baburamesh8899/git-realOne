function whilefunc()
{
	var number=prompt("Enter value to display numbers:");
	confirm("Are you entered "+number+" ?");
	var i=0;
	while(i<=number)
	{
	  console.log("i ="+i);
	  console.log("\n");
	  i++;
	}

}