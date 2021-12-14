package net.javaguides.springboot.controler;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import net.javaguides.springboot.model.Produto;
import net.javaguides.springboot.repository.ProdutoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class ProdutoController {

	private static String caminhoImagens = "/home/hackergt/Documents/";
	@Autowired
	private ProdutoRepository produtoRepository;

	@GetMapping("produtos")
	public List<Produto> getUser() {
		return produtoRepository.findAll();
	}

	@PostMapping("produtos/")
	public Produto createProduto(@RequestBody Produto produto, BindingResult result,
			@RequestParam("file") MultipartFile arquivo) {

		produtoRepository.save(produto);
		
		try {
			if(!arquivo.isEmpty()) {
				byte[] bytes = arquivo.getBytes();
				Path caminho = Paths.get(caminhoImagens+arquivo.getOriginalFilename());
				Files.write(caminho, bytes);
			}
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		return produtoRepository.save(produto);
	}

}
