package br.org.generation.minaempreendedora.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.generation.minaempreendedora.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long> {
	public List<Tema>findAllByTemaContainingIgnoreCase(String tema);

}
