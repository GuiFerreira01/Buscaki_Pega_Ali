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
import net.javaguides.springboot.model.ParaVC;
import net.javaguides.springboot.repository.ParaVCRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class ParaVCController {

	@Autowired
	private ParaVCRepository paravcRepository;

	@GetMapping("ParaVC")
	public List<ParaVC> getProdutos() {
		return paravcRepository.findAll();
	}

	@PostMapping("ParaVC/")
	public ParaVC createProduto(@RequestBody ParaVC paravc) {
		return paravcRepository.save(paravc);
	}

}
