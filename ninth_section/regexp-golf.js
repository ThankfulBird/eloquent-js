let globalRegexp =
 /(ca[rt])|(pr?op)|(ferr(ari|et|y))|(.*ious$)|(\s[.,;:])|(\w{6,})|(^[^eE]*$)/

 function verify(regexp, yes, no) {
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}

verify(globalRegexp,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(globalRegexp,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(globalRegexp,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(globalRegexp,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(globalRegexp,
    ["bad punctuation ."],
    ["escape the period"]);

verify(globalRegexp,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(globalRegexp,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);