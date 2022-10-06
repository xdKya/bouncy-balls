//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var chao;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  //cria as opções
  var chao_Options = {
    isStatic: true,
  };

  //criando nossos corpos fisicos
  chao = Bodies.rectangle(200, 390, 400, 20, chao_Options);

  //adicionando ao mundo
  World.add(world, chao);

  console.log(chao);
}

function draw() {
  background("black");

  //centraliza o retangulo
  rectMode(CENTER);

  //desenhando os corpos fisicos na tela
  rect(chao.position.x, chao.position.y, 400, 20);

  Engine.update(engine);
}
