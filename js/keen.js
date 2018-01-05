
  var client = new Keen({
    projectId: "598a6e5ec9e77c00011811fa",
    readKey: "4E25C1A17EC7BFBE2FA058108F133D23C59768E748F397AB15224DFF7E8391A76519FBB4CEF8FA2ADDD7765AEFC276462E512EBB2D06201223030B52C7BF6B8DB42C687AD2C2402B6119957256D72E521C5C02DC7E92F1DBAFCC745258903361"
  });
  const cookie = Cookies.get('ajs_anonymous_id');
  var anonymousId = cookie ? cookie.replace(/\"/g, "", true) : null;

  var chart_left = new Keen.Dataviz()
  .el("#keen-left")
  .height(175)
  .width(175)
  .colors(["#342f54"])
  .title("Left Clicks")
  .type("metric")
  .prepare();

  client
  .query("count", {
      event_collection: "left",
    filters: [{"operator":"eq","property_name":"anonymousId","property_value":anonymousId}],
    timeframe: "this_5_minutes",
    timezone: "US/Eastern"
  })
  .then(function(res) {
    chart_left.data(res).render();
  })
  .catch(function(err) {
    chart_left.message(err.message);
  });

  var chart_right = new Keen.Dataviz()
  .el("#keen-right")
  .height(175)
  .width(175)
  .colors(["#342f54"])
  .title("Right Clicks")
  .type("metric")
  .prepare();
  client
  .query("count", {
    event_collection: "right",
    filters: [{"operator":"eq","property_name":"anonymousId","property_value":anonymousId}],
    timeframe: "this_5_minutes",
    timezone: "US/Eastern"
  })
  .then(function(res) {
    chart_right.data(res).render();
  })
  .catch(function(err) {
    chart_right.message(err.message);
  });

  var chart_up = new Keen.Dataviz()
  .el("#keen-up")
  .height(175)
  .width(175)
  .colors(["#342f54"])
  .title("Up Clicks")
  .type("metric")
  .prepare();
  client
  .query("count", {
    event_collection: "up",
    filters: [{"operator":"eq","property_name":"anonymousId","property_value":anonymousId}],
    timeframe: "this_5_minutes",
    timezone: "US/Eastern"
  })
  .then(function(res) {
    chart_up.data(res).render();
  })
  .catch(function(err) {
    chart_up.message(err.message);
  });

  var chart_down = new Keen.Dataviz()
  .el("#keen-down")
  .height(175)
  .width(175)
  .colors(["#342f54"])
  .title("Down Clicks")
  .type("metric")
  .prepare();
  client
  .query("count", {
    event_collection: "down",
    filters: [{"operator":"eq","property_name":"anonymousId","property_value":anonymousId}],
    timeframe: "this_5_minutes",
    timezone: "US/Eastern"
  })
  .then(function(res) {
    chart_down.data(res).render();
  })
  .catch(function(err) {
    chart_down.message(err.message);
  });
