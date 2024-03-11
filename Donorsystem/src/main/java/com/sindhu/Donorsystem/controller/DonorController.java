package com.sindhu.Donorsystem.controller;

import com.sindhu.Donorsystem.model.Donor;
import com.sindhu.Donorsystem.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/donor")
public class DonorController {
    @Autowired
    private DonorService donorService;

    @PostMapping("/add")
    public String add(@RequestBody Donor donor){
       donorService.saveDonor(donor);
        return "New donor is added";
    }

    @GetMapping("/getAll")
    public List<Donor> getAllDonors(){
        return donorService.getAllDonors();
    }

}
