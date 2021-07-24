/*the is a program for a todo list*/
function add(a)
{
    let data=prompt("Enter the desired data")
    a.push(data);
    alert('Your data has been added')
}
function del(a)
{
    if(a.pop())
        alert('Element deleted')
    else
        alert('No Element to delete')
}
function see(a)
{
    alert(`The elements in the array are\n`+a.join('\n'))
}
alert('This program will be a todo list\nYou can choose any of the following options\n1.Add\n2.Delete\n3.View\n4.Exit')
let opt
let a=[]
while(opt!=4)
{
    opt=parseInt(prompt('Enter Your Choice'))
    switch(opt)
    {
        case 1:
            add(a);
            break;
        
        case 2:
            del(a)
            break;

        case 3:
            see(a)
            break;
    }
    if(opt==4)
        {
            alert('have a nice day!!')
            break;
        }
}