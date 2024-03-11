package com.sindhu.Donorsystem.service;

import com.sindhu.Donorsystem.model.Donor;

import java.util.List;

public interface DonorService {
    public Donor saveDonor(Donor donor);
    public List<Donor> getAllDonors();
}
