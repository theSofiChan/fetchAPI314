package sof.fetchapi314.entity;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name="roles")
public class Role implements GrantedAuthority{
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    public Role() {
    }
    public Role(String name) {        this.name = name;    }
//    public Role(Long id) {        this.id = id;    }
    private String name;

    @Override
    public String toString() {
        return this.name;
    }

    @Override
    public String getAuthority() {
        return name;
    }
}

