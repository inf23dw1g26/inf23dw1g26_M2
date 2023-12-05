-------------------------------
--- Criação da base de dados---
-------------------------------

create database DoacaoDeAnimais
use DoacaoDeAnimais

-- Criação da tabela de Animal
create table animal (
	idAnimal int primary key,
	name varchar(50),
	age int,
	typeAnimal varchar(50),
	breed varchar(50),
	description varchar(200)
	)

-- Criação da tabela de Voluntários
create table volunteer (
	idVolunteer int primary key,
	name varchar(50),
	anoInicioVolunteering datetime2,
	phoneNumber varchar(9),
	address varchar(100)
	)

-- Criação da tabela de Pessoa
create table person (
	idPerson int primary key,
	name varchar(50),
	address varchar(100)
	)

-- Criação da tabela de Adoções
create table adoption (
	idAdoption int primary key,
	idAnimal int references animal(idAnimal),
	name varchar(50),
	address varchar(100),
	idPerson int references person(idPerson),
	idVolunteer int references volunteer(idVolunteer),
	description varchar(200)
	)

-- Criação da tabela de Doações
create table donations (
	idDonation int primary key,
	idPerson int references person(idPerson),
	type varchar(50),
	quantity int
	)

--------------------------
---Introdução dos Dados---
--------------------------

insert into animal(idAnimal, name, age, typeAnimal, breed, description) values (1, 'Bobi', 3, 'Dog', 'Yorkshire', 'This dog is normal')
insert into animal(idAnimal, name, age, typeAnimal, breed, description) values (2, 'Mizuki', 5, 'Cat', 'Birman', 'This cat is hypoallergenic')

insert into volunteer (idVolunteer, name, anoInicioVolunteering, phoneNumber, address) values (1, 'Joaquim', 2018, 939339396, 'Rua das pedras 31 4º andar')
insert into volunteer (idVolunteer, name, anoInicioVolunteering, phoneNumber, address) values (2, 'Bruna', 2021, 938521766, 'Rua da poça 12 2º andar')

insert into person (idPerson, name, address) values (1, 'Nuno', 'Rua das arvores36 7º andar')
insert into person (idPerson, name, address) values (2, 'Marta', 'Rua das flores 51 1º andar')

insert into adoption (idAdoption, idAnimal, name, address, idPerson, idVolunteer, description) values (1, 1, 'Adoption 01', 'Rua dos peixes 17 1º andar', 1, 1, 'The animal of this adoption was a dog named Bobi')
insert into adoption (idAdoption, idAnimal, name, address, idPerson, idVolunteer, description) values (2, 2, 'Adoption 02', 'Rua das flores 13 3º andar', 2, 2, 'The animal of this adoption was a hypoallergic cat named Mizuki')

insert into donations (idDonation, idPerson, type, quantity) values (1, 2, 'food', 10)
insert into donations (idDonation, idPerson, type, quantity) values (2, 3, 'toys', 5)