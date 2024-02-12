import cars from "../public/api/cars.json";

declare type Cars = typeof cars;
declare type Car = Cars[number];
declare type CarBodyType = Car["bodyType"];
