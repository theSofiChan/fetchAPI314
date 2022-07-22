package sof.fetchapi314.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import sof.fetchapi314.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);


}


