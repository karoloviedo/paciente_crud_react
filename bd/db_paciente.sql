PGDMP                         {            db_paciente    10.23    15.3     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �
           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �
           1262    16393    db_paciente    DATABASE     �   CREATE DATABASE db_paciente WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE db_paciente;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            �
           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    6            �            1259    16394    paciente    TABLE       CREATE TABLE public.paciente (
    id integer NOT NULL,
    type_id character varying NOT NULL,
    nombre character varying NOT NULL,
    apellido character varying NOT NULL,
    telefono numeric NOT NULL,
    email character varying NOT NULL,
    genero character varying NOT NULL
);
    DROP TABLE public.paciente;
       public            postgres    false    6            �            1259    16408    paciente_id_seq    SEQUENCE     �   ALTER TABLE public.paciente ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.paciente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    6    196            �
          0    16394    paciente 
   TABLE DATA           Z   COPY public.paciente (id, type_id, nombre, apellido, telefono, email, genero) FROM stdin;
    public          postgres    false    196   	       �
           0    0    paciente_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.paciente_id_seq', 24, true);
          public          postgres    false    197            p
           2606    16401    paciente paciente_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.paciente
    ADD CONSTRAINT paciente_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.paciente DROP CONSTRAINT paciente_pkey;
       public            postgres    false    196            �
   �   x�m��N�0���Ü���'!QPј�pǖ�ޞM qE�}3��AL��z܆�}=��),��3Z����!��_��}�1�2�4�siz)�[���٧ �qʫ�h�%@��Չ�	��`�*��S�g<�<�f�رu��/����WZY")�]˄�<�0ˈ�_�u�l��7����z��㧘
��"����M��g�V2�����h�~'�>Wc��C�4��sl     