import HashMap from "./HashMap.js";

const hashMap = new HashMap(3);
hashMap.set("name", "John Doe");
hashMap.set("age", 30);
hashMap.set("location", "USA");
hashMap.set("job", "Software Engineer");
console.log(`remove: ${hashMap.remove("age")}`);
console.log(`entries: ${hashMap.entries()}`);
