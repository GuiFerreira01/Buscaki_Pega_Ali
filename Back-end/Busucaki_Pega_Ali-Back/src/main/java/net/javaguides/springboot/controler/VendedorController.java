package net.javaguides.springboot.controler;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;
import net.javaguides.springboot.model.Vendedor;
import net.javaguides.springboot.repository.VendedorRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class VendedorController {

	@Autowired
	private VendedorRepository vendedorRepository;

	@GetMapping("Vendedor")
	public List<Vendedor> getProdutos() {
		return vendedorRepository.findAll();
	}

	@PostMapping("Vendedor/")
	public Vendedor createProduto(@RequestBody Vendedor vendedor) {
		return vendedorRepository.save(vendedor);
	}

}
