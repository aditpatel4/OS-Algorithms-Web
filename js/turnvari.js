var x=document.getElementById('noncritical');
var cs = 0;
var turn = 1;
var state = document.getElementById('turn_state');
state.innerHTML = '<i class="fas fa-sync-alt mr-2"></i>Turn: '+turn;

function cs_state(id)
{
    if(cs == 0)
    {
        if(id == turn)
        {
            var x = document.getElementById(id);
            x.remove();
            var y = document.getElementById('critical');
            y.innerHTML += '<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = '+id+' onclick="exit_state(this.id)">P'+id+'</button>';
            cs = id;
            if(id == 1) id = 2;
            else id = 1;
            state.innerHTML = '<i class="fas fa-sync-alt mr-2"></i>Turn: '+turn;
        }
        else 
        {
            alert("the turn is for "+turn);
        }
    }
    else 
    {
        alert('there is already a process using critical state');
    }
}
function exit_state(id)
{
    var x = document.getElementById(id);
    x.remove();
    var y = document.getElementById('noncritical');
    y.innerHTML += '<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = '+id+' onclick="while_state(this.id)">P'+id+'</button>';
    if(turn == 1) turn = 2;
    else turn = 1;
    state.innerHTML = '<i class="fas fa-sync-alt mr-2"></i>Turn: '+turn;
    cs = 0;
}
function while_state(id)
{
    console.log(cs);
    if(cs == 0)
    {
        if(id == turn)
        {
            var x = document.getElementById(id);
            x.remove();
            var y = document.getElementById('critical');
            y.innerHTML += '<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = '+id+' onclick="exit_state(this.id)">P'+id+'</button>';
            cs = id;
            if(id == 1) id = 2;
            else id = 1;
            state.innerHTML = '<i class="fas fa-sync-alt mr-2"></i>Turn: '+turn;
        }
        else 
        {
            alert("the turn is for "+turn);
        }
    }
    else 
    {
        var x = document.getElementById(id);
        x.remove();
        var y = document.getElementById('while');
        y.innerHTML += '<button class=" btn btn-dark p-3 btn-lg fourth mr-4" id = '+id+' onclick="cs_state(this.id)">P'+id+'</button>';
    }
}