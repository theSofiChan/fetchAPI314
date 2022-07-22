package sof.fetchapi314.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sof.fetchapi314.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

}
