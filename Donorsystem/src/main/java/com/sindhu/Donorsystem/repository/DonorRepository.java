package com.sindhu.Donorsystem.repository;

import com.sindhu.Donorsystem.model.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonorRepository extends JpaRepository<Donor, Integer> {
}
