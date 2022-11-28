DROP TABLE IF EXISTS producteurs;

CREATE TABLE producteurs (
       prod_id SERIAL PRIMARY KEY,
       prod_name VARCHAR(64) NOT NULL,
       prod_type VARCHAR(64) NOT NULL,
       prod_loca VARCHAR(64) NOT NULL,
       prod_pres VARCHAR(6000) NOT NULL
);
