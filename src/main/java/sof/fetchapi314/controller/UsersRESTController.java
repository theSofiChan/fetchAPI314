package sof.fetchapi314.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sof.fetchapi314.entity.Role;
import sof.fetchapi314.entity.User;
import sof.fetchapi314.repository.UserRepository;
import sof.fetchapi314.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UsersRESTController {
    private final UserRepository userRepo;
    private final UserService userService;

    @Autowired
    public UsersRESTController(UserRepository userRepo, UserService userService) {
        this.userRepo = userRepo;
        this.userService = userService;
    }
    @GetMapping("/admin/users/{id}")
    public User returnOne(@PathVariable Long id){
        return userRepo.findById(id).orElse(null);
    }

    @PostMapping("admin/users/save")
    public ResponseEntity<User> save(@RequestBody User user){
        return ResponseEntity.ok(userRepo.save(user));
    }

    @PutMapping("admin/users/save")
    public ResponseEntity<User> update(@RequestBody User u){
        return ResponseEntity.ok(userRepo.save(u));
    }

    @DeleteMapping("/admin/users/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        userRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/admin/users")
    public List<User> showAll(){
        return userRepo.findAll();
    }

    @GetMapping("/admin/roles")
    public List<Role> allRoles(){
       return userService.listRoles();
    }


}
