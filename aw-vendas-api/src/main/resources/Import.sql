insert into cliente (id, nome) values (1, 'Eletrônicos Eletro');
insert into cliente (id, nome) values (2, 'Smart Compras');
insert into cliente (id, nome) values (3, 'Eletrica & CIA');
insert into cliente (id, nome) values (4, 'Fast Loja');

insert into produto (id, nome, valor) values (1, 'Notebook', 2950.0);
insert into produto (id, nome, valor) values (2, 'Caderno', 240.0);
insert into produto (id, nome, valor) values (3, 'Computador Gamer', 6760.0);
insert into produto (id, nome, valor) values (4, 'Smartphone', 4099.0);

insert into venda (id, cliente_id, frete, total, cadastro) values (1, 1, 15.0, 2965.0, sysdate());

insert into item (id, venda_id, produto_id, quantidade) values (1, 1, 1, 1);



