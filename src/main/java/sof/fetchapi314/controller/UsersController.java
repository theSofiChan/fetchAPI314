package sof.fetchapi314.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sof.fetchapi314.entity.Role;
import sof.fetchapi314.repository.UserRepository;
import sof.fetchapi314.service.UserService;

import java.util.List;

@Controller
@Configuration
@EnableGlobalMethodSecurity(
        prePostEnabled = true,
        securedEnabled = true,
        jsr250Enabled = true)
public class UsersController {
    private final UserRepository userRepo;
    private final UserService userService;

    @Autowired
    public UsersController(UserRepository userRepo, UserService userService) {
        this.userRepo = userRepo;
        this.userService = userService;
    }

    @GetMapping("/user")
    public String goToUserPage(Authentication authentication, Model model) {
        model.addAttribute("user", userService.getUserById(userService.findByUserEmail(authentication.getName()).getId()));
        return "user";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin")
    public String goToAdminPage(Authentication authentication, Model model) {
        model.addAttribute("user", userService.getUserById(userService.findByUserEmail(authentication.getName()).getId()));
        List<Role> listRoles = userService.listRolesForAUser();
        model.addAttribute("users", userRepo.findAll());
        model.addAttribute("listRoles", listRoles);
        return "admin";
    }


}
