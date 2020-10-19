-- 1. Switch to world DB
use world;

-- 2. List all tables 
show tables;

-- 3. View the schema of all tables
desc city;
desc country;
desc countrylanguage;

-- 4. Select all rows from the tables
select * from city;
select * from country;
select * from countrylanguage;

-- 5. Select the codes of all countries from North America
select Code 
from country 
where continent like 'North America';

-- 6. SUBQUERY: Select language details for English language for countries in North America. Additionally English must be an official language there.
select * 
from countryLanguage
where language like 'English' and isOfficial = 'T' and CountryCode in (
		select code 
		from country 
		where continent like 'North America'
    );

-- 7. COUNT: Select count of cities
select name,count(name) from city group by name ;

-- 8. GROUP BY, ORDER BY, COUNT: Which country has highest number of cities?
select country.name,count(*) as total_cities
from country,city
where country.code = city.countryCode
group by country.name
order by total_cities desc; 

-- 9. WHERE, BETWEEN: Which language is its country’s official language and spoken by 80 to 90 percent of people?
select name from country where code in (
		select CountryCode 
		from countryLanguage 
		where isOfficial = 'T' and Percentage between 80 and 90
    );

-- WHERE, COUNT: how many cities have been listed in Maharashtra district of India
select count(*) 
from city 
where district like 'Maharastra';

-- WHERE, MAX, SUBQUERY: Which country has the maximum population (if population is taken as the population from the country table)
-- Using subquery: Find the maximum population of a country, then find the country with that population. Combine the two steps using a sub-query.
select name from country
where Population = (
	select max(Population) from country
    ); 

-- ORDER BY, LIMIT: Which country has the maximum population (if population is taken as the population from the country table)
select name from country
order by Population desc limit 1;

-- COUNT, GROUP BY, ORDER BY: Which language is spoken in the maximum number of countries?
select countrylanguage.language,count(country.name)
from countrylanguage,country
where country.code = countryLanguage.CountryCode 
group by countrylanguage.language
order by count(country.name) desc
limit 1;

-- WHERE (including filtering language), COUNT, GROUP BY, ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Efficient solution
select language,count(language) from countrylanguage
where language in ('German','Russian','Chinese') and isOfficial = 'T'
group by language
order by count(language);

-- WHERE (excluding filtering language), COUNT, GROUP BY, HAVING (filtering by language IN), ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Relatively inefficient solution
select countryLanguage.Language, count(*) as countires_count 
from country, countryLanguage 
where country.code = countryLanguage.CountryCode and countryLanguage.isOfficial = 'T' and (countryLanguage.Language = 'English' or  countryLanguage.Language = 'German' or countryLanguage.Language = 'Chinese')
group by countryLanguage.Language 
order by countires_count desc ;

-- WHERE, AND (optionally INNER JOIN) How many countries in North America are there where English is the official language?
select count(*) 
from country
where continent = 'North America' and code in ( 
		select countryCode 
        from countryLanguage 
        where isOfficial = 'T'
	);

-- SUBQUERY, WHERE, AND (optionally INNER JOIN), COUNT, GROUP BY: Who are the heads of state in countries in North America are there where English is the official language. How many such countries are under respective heads of state?


-- ORDER BY, LIMIT: Which city has the maximum population?
select name from city 
order by population desc
limit 1;

-- SUBQUERY, MAX: Which city has the maximum population?
select name 
from city 
where (select max(population) from city)
limit 1; 

-- WHERE, NULL: How many row entries are there with any value in the country table being missing?


-- COUNT, WHERE, LIKE: How many countries are there whose name starts with I and ends with A?
select count(name) 
from country 
where name like 'I%A';

-- SUM, GROUP BY, ORDER BY, LIMIT: Which continent has least surface area?
select * from country
order by surfacearea asc
limit 1;

-- WHERE, ORDER BY: What are the top 5 languages spoken in India?
select language 
from countryLanguage 
where CountryCode in ( 
		select code 
		from country 
        where name like 'India'
	) 
order by percentage desc 
limit 5;

-- COUNT, GROUP BY, ORDER BY: How many languages are spoken (as per data available) in each country? Present your results in descending order of number of languages spoken.
select country.name, count(*) as Languages_Spoken
from countryLanguage, country
where country.code = countryLanguage.CountryCode
group by country.name;

-- WHERE, COUNT, GROUP BY: What is the count of countries for each unique combination of Government form and head of state?
select count(name),GovernmentForm, HeadOfState from country group by GovernmentForm, HeadOfState;
