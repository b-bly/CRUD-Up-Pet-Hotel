CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    first_name character varying(60) not null,
    last_name character varying(80) not null
);

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    pet_name character varying(60) not null,
    breed character varying(80) not null,
    color varchar (20) not null,
    owner_id integer REFERENCES owners 
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    check_in_date  date,   
    check_out_date date,     
    pet_id integer references pets
 ); 
    
 

    