--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: entries; Type: TABLE; Schema: public; Owner: beigeh0ney
--

CREATE TABLE public.entries (
    id integer NOT NULL,
    title character varying(50) NOT NULL,
    content text NOT NULL,
    author_username character varying(50) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    tags character varying(50)
);


ALTER TABLE public.entries OWNER TO beigeh0ney;

--
-- Name: entries_id_seq; Type: SEQUENCE; Schema: public; Owner: beigeh0ney
--

CREATE SEQUENCE public.entries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.entries_id_seq OWNER TO beigeh0ney;

--
-- Name: entries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: beigeh0ney
--

ALTER SEQUENCE public.entries_id_seq OWNED BY public.entries.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: beigeh0ney
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(20) NOT NULL,
    email character varying(30) NOT NULL,
    user_since timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO beigeh0ney;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: beigeh0ney
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO beigeh0ney;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: beigeh0ney
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: entries id; Type: DEFAULT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.entries ALTER COLUMN id SET DEFAULT nextval('public.entries_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: entries; Type: TABLE DATA; Schema: public; Owner: beigeh0ney
--

COPY public.entries (id, title, content, author_username, created_at, tags) FROM stdin;
1	New Addition to the Fam!	Meet Garbage, our newest furry friend! This mischievous kitten was found in the most unexpected place - right outside our local dumpster! Talk about a wild ride from rags to riches! Garbage loves to curl up in tiny balls and snooze the day away. His favorite pastime? Chasing invisible bugs around the house. It's hilarious to watch! As a fellow cat lover, I'm curious - what are some of your favorite kitten stories? Share yours in the comments below!	catlady123	2024-06-17 12:00:00	#catsofinstagram #kittenlove #garbagelife
3	Thoughts on Birds?	Are birds just cute, feathered friends, or are they secretly working for Big Brother? As someone who's spent countless hours watching their flock outside the window, I've developed quite the opinion on this topic. Birds are fascinating creatures with impressive abilities. But have you ever stopped to think about their behavior? From seemingly random movements to predicting weather changes, it's hard not to wonder if there's more going on beneath the surface. Could certain bird species possess cognitive abilities rivaling those of primates? Maybe they're capable of complex communication networks, potentially even coordinating global operations? What do you think? Are birds just innocent bystanders, or are they playing a much bigger role than we realize? Let's discuss!	birdstalker	2012-04-20 12:00:00	\N
4	Weenie Dog Discourse	Dachshunds - those long, low-slung bundles of joy that have captured the hearts of many pet owners worldwide. But let's face it - we've all been guilty of calling them 'weenie dogs' at some point. As a dachshund owner myself, I can confidently say they're more than just cute, sausage-shaped companions. They're loyal friends, playful partners in crime, and constant sources of entertainment. Their unique physiology allows them to squeeze into spaces most other breeds could only dream of. But it comes with its challenges - from navigating tight spaces to dealing with potential health issues. So, fellow dachshund enthusiasts, how do you feel about the term 'weenie do'? Is it a harmless nickname, or does it diminish the breed's unique qualities? Let's discuss the pros and cons of this beloved breed!	dogs143	2024-10-02 17:34:53.643623	#weenie, #dog
10	Just Horsing Around	Hey there, fellow animal lovers! Today I'm excited to share a quick joke that's sure to put a smile on your face: Why did the horse get kicked out of the movie theater? Because he was horsing around! Horses have played an integral role in shaping our world, from ancient civilizations relying on them for transportation and labor to modern-day equine sports. Whether you're a seasoned equestrian or just appreciate these majestic creatures from afar, there's no denying their impact. So next time you see a horse, take a moment to appreciate its grace and strength. Who knows - you might just find yourself horsing around with a smile on your face! What's your favorite animal-related joke? Share it in the comments below and let's keep the laughter going!	horsegirl420	2024-10-03 23:55:52.267845	#horses4lyfe #neigh
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: beigeh0ney
--

COPY public.users (id, username, email, user_since) FROM stdin;
1	catlady123	ilovecats@gmail.com	2023-09-30 12:00:00
2	dogs143	dogs@gmail.com	2024-02-11 12:00:00
3	birdstalker	birdwatcher@gmail.com	2011-12-03 12:00:00
4	horsegirl420	horsequeen@gmail.com	2024-10-03 23:54:00.014932
\.


--
-- Name: entries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: beigeh0ney
--

SELECT pg_catalog.setval('public.entries_id_seq', 26, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: beigeh0ney
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: entries entries_pkey; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: entries entries_author_username_fkey; Type: FK CONSTRAINT; Schema: public; Owner: beigeh0ney
--

ALTER TABLE ONLY public.entries
    ADD CONSTRAINT entries_author_username_fkey FOREIGN KEY (author_username) REFERENCES public.users(username);


--
-- PostgreSQL database dump complete
--

