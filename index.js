import HashMap from "./HashMap.js";

const hashMap = new HashMap(3);
hashMap.set("name", "John Doe");
hashMap.set("age", 30);
hashMap.set("location", "USA");
console.log(hashMap.get("name"));