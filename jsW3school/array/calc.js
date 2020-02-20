function calc()
    {
      form=document.getElementById("form1");
      sal=form.sal.value;

      sal=parseFloat(sal);

      form.da.value=(sal*46/100);
     
      form.hra.value=(sal*12/100);

      form.pf.value=(sal*8/100);
      form.pd.value=(sal*8/100);

      d=parseFloat(form.da.value);
      h=parseFloat(form.hra.value);
      p=parseFloat(form.pf.value);
      gs=parseFloat(sal+d+h+p);
      form.gsal.value=parseFloat(gs);
       
      form.tax.value=((gs-p)*20/100);
      t=parseFloat(form.tax.value);
      form.ns.value=parseFloat(gs-(t+p));
    }