package br.org.generation.minaempreendedora.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;



@Entity
@Table(name = "tb_temas")
public class Tema{
	    
	    @Id	
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;
	    
	    @NotBlank(message = "O atributo Descrição é obrigatório e não pode conter espaços em branco")
	    @Size(min = 5, max = 255, message = "O tema deve ter no minimo 5 e no maximo 255 caracteres")
	    private String tema;
		
		@NotBlank(message = "O atributo Descrição é obrigatório e não pode conter espaços em branco")
		private String descricao;
		
		@NotBlank(message = "O atributo palavra-chave é obrigatório e não pode conter espaços em branco")
		@Size(min = 5, max = 255, message = "A palavra-chave deve ter no minimo 5 e no maximo 255 caracteres")
		private String palavrachave;
	
		
		public String getTema() {
			return tema;
		}

		public void setTema(String tema) {
			this.tema = tema;
		}

		public String getPalavrachave() {
			return palavrachave;
		}

		public void setPalavrachave(String palavrachave) {
			this.palavrachave = palavrachave;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getDescricao() {
			return descricao;
		}

		public void setDescricao(String descricao) {
			this.descricao = descricao;
		}

		
}