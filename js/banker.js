function banker()
{

                  var n = document.getElementById('process').value;
                  var re = document.getElementById('resource').value.split(" ");
                  var m = re.length;
                  var t1 = document.getElementById('needtable');
                  t1.innerHTML = "";
                  var t2 = document.getElementById('alloctedtable');
                  t2.innerHTML = "";
                  var dummy = document.getElementById('max').value.split("\n");
                  var max = new Array(dummy.length);
                  for(var i = 0; i < dummy.length; i++)
                  {
                      max[i] = dummy[i].split(" ");
                  }
                  dummy = document.getElementById('allocated').value.split("\n");
                  var allocated = new Array(dummy.lenght);
                  for(var i = 0; i < dummy.length; i++)
                  {
                      allocated[i] = dummy[i].split(" ");
                  }

                  var need = new Array(n);
                  for(var i = 0; i < m; i++)
                  {
                      re[i] = parseInt(re[i]);
                  }
                  for(var i = 0; i < n; i++)
                  {
                      need[i] = new Array(m);
                      for(var j = 0; j < m; j++)
                      {
                          max[i][j] = parseInt(max[i][j]);
                          allocated[i][j] = parseInt(allocated[i][j]);
                          need[i][j] = max[i][j] - allocated[i][j];
                      }
                  }

                  var f = new Array(n);
                  var ans = new Array(n);
                  var track = 0;
                  for(var i = 0; i < n; i++)
                  {
                      f[i] = 0;
                      ans[i] = 0;
                  }
                for(var i = 0; i < n; i++)
                {
                      for(var j = 0; j < n; j++)
                      {
                         if(f[j] == 0)
                         {
                              var flag = 0;
                              for(var y = 0; y < m; y++)
                              {
                                  if(need[j][y] > re[y])
                                  {
                                      flag = 1;
                                      break;
                                  }
                              }
                              if(flag == 0)
                              {
                                  for(var y = 0; y < m; y++)
                                  {
                                      re[y]  += allocated[j][y];
                                  }
                                  f[j] = 1;
                                  ans[track++] = j;
                              } 
                         }
                      }
                  }

                  var h = document.getElementById('needinfo');
        h.innerHTML = '<h5><i class="fas fa-table pr-3"></i>Need Table:</h5>';
        for(var i = 0; i < need.length; i++)
        {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var e = document.createTextNode('P'+(i+1));
            td.appendChild(e);
            tr.appendChild(td);
            for(var j = 0; j < m; j++)
            {
                var td = document.createElement('td');
                var e = document.createTextNode(max[i][j]);
                td.appendChild(e);
                tr.appendChild(td);
            }
            t1.appendChild(tr);
        }
        var hh = document.getElementById('allocatedinfo');
        hh.innerHTML = '<h5><i class="fas fa-table pr-3"></i>Allocated Table:</h5>';
        for(var i = 0; i < need.length; i++)
        {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var e = document.createTextNode('P'+(i+1));
            td.appendChild(e);
            tr.appendChild(td);
            for(var j = 0; j < m; j++)
            {
                var td = document.createElement('td');
                var e = document.createTextNode(allocated[i][j]);
                td.appendChild(e);
                tr.appendChild(td);
            }
            t2.appendChild(tr);
        }
        console.log(track);
        var pr = "";
        if(track != n)
        {
            pr += '<i class="fas fa-lock pr-3"></i>Deadlock';
        }
        else 
        {
            for(var i = 0; i < n-1; i++)
            {
                pr += "P"+(ans[i]+1)+" "+'<i class="fas fa-arrow-right pr-3">'+" ";
            }
            pr += "P"+(ans[n-1]+1);
        }
        document.getElementById('ans').innerHTML = pr;
}