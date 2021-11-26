var entry_state = [];
var n;
var track = 0;
var exit_state = 0;
var lock = 0;
var state = document.getElementById('lock_state');

function add_exit(id)
{
    exit_state++;
    lock = 1;
    if(lock == 1)
    {
        state.innerHTML = '<i class="fa fa-unlock pr-2"></i>Semaphore State - 1';
    }
    else 
    {
        state.innerHTML = '<i class="fa fa-lock pr-2" aria-hidden="true"></i>Semaphore state - 0';
    }
    document.getElementById('exit_head').style.display = "";
    var x = document.getElementById(id);
    x.remove();
    var z = document.getElementById('exit');
    var s = '<button type="button" class="btn ml-3 my-2 sixth"  id = '+(id)+'>'+'Process'+(id)+'</button>';
    z.innerHTML += s;
    if(entry_state.length != track)
    {
        lock = 0;
        if(lock == 1)
        {
            state.innerHTML = '<i class="fa fa-unlock pr-2"></i>Semaphore State - 1';
        }
        else 
        {
            state.innerHTML = '<i class="fa fa-lock pr-2" aria-hidden="true"></i>Semaphore state - 0';
        }
        var jd = entry_state[track++];
        console.log(jd);
        var x = document.getElementById(jd);
        x.remove();
        var z = document.getElementById('cs');
        var s = '<button type="button" class="btn ml-3 my-2 fifth" onclick="add_exit(this.id)" id = '+(jd)+'>'+'Process'+(jd)+'</button>';
        z.innerHTML += s;
    }
}
function add_cs(id)
{
    if(lock == 0)
    {
        alert("some process is already present plz try again later");
    }
    else
    {
        lock = 0;
        if(lock == 1)
        {
            state.innerHTML = '<i class="fa fa-unlock pr-2"></i>Semaphore State - 1';
        }
        else 
        {
            state.innerHTML = '<i class="fa fa-lock pr-2" aria-hidden="true"></i>Semaphore state - 0';
        }
        document.getElementById('cs_head').style.display = "";
        var x = document.getElementById(id);
        x.remove();
        var z = document.getElementById('cs');
        var s = '<button type="button" class="btn ml-3 my-2 fifth" onclick="add_exit(this.id)" id = '+(id)+'>'+'Process'+(id)+'</button>';
        z.innerHTML += s;
       
    }
}
function add_entry(id)
{
    if(lock == 1)
    {
        lock = 0;
        if(lock == 1)
        {
            state.innerHTML = '<i class="fa fa-unlock pr-2"></i>Semaphore State - 1';
        }
        else 
        {
            state.innerHTML = '<i class="fa fa-lock pr-2" aria-hidden="true"></i>Semaphore state - 0';
        }
        document.getElementById('cs_head').style.display = "";
        var x = document.getElementById(id);
        x.remove();
        var z = document.getElementById('cs');
        var s = '<button type="button" class="btn ml-3 my-2 fifth" onclick="add_exit(this.id)" id = '+(id)+'>'+'Process'+(id)+'</button>';
        z.innerHTML += s;
    }
    else 
    {
        document.getElementById('entry_head').style.display = "";
        entry_state.push(id);
        var x = document.getElementById(id);
        x.remove();
        var z = document.getElementById('entry');
        var s = '<button type="button" class="btn ml-3 my-2 fourth" onclick="add_cs(this.id)" id = '+(id)+'>'+'Process'+(id)+'</button>';
        z.innerHTML += s;
    }
}

function lockvari()
{
    n = document.getElementById('process').value;
    entry_state = [];
    track = 0;
    exit_state = 0;
    lock = 1;
    state = document.getElementById('lock_state');
    //added
    document.getElementById('added_head').innerHTML = "Added State:";
    var t = document.getElementById('added');
    document.getElementById('entry').innerHTML = "";
    document.getElementById('cs').innerHTML = "";
    document.getElementById('exit').innerHTML = "";
    t.innerHTML = "";
    for(var i = 0; i < n; i++)
    {
        var s = '<button type="button" class="btn ml-3 my-2 third" id = '+(i+1)+' onclick="add_entry(this.id)">'+'Process'+(i+1)+'</button>';
        t.innerHTML += s;
    }
    //added part
}
