
function SVC(str)
{
let countvowels=[];
let countconts=[];
let spaces=[];
for(let i=0;i<str.length;i++)
{
    
let char=str.charAt(i)
if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
{
   countvowels[char]=(countvowels[char]||0)+1
   countvowels.push(char);
}
else if(char=='')
{
    spaces[char]=(spaces[char]||0)+1
    spaces.push(char)
}
else
{
   countconts[char]=(countconts[char]||0)+1
   countconts.push(char);
}
}

console.log(countvowels);
console.log(countconts);
console.log(spaces);
}
SVC("anvaya kin care");
