CREATE TABLE classification__category (id INT AUTO_INCREMENT NOT NULL, media_id INT NOT NULL, parent_id INT NOT NULL, name VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, slug VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, position INT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
CREATE TABLE classification__collection (id INT AUTO_INCREMENT NOT NULL, media_id INT NOT NULL, name VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, slug VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
CREATE TABLE classification__tag (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, slug VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

CREATE TABLE blog__comment (id INT AUTO_INCREMENT NOT NULL, post_id INT NOT NULL, name VARCHAR(255) DEFAULT NULL, url VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, message LONGTEXT NOT NULL, status INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
CREATE TABLE blog__post (id INT AUTO_INCREMENT NOT NULL, image_id INT NULL, author_id INT NOT NULL, collection_id INT NULL, title VARCHAR(255) NOT NULL, locale VARCHAR(2), abstract LONGTEXT NOT NULL, content LONGTEXT NOT NULL, raw_content LONGTEXT NOT NULL, content_formatter VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, slug VARCHAR(255) NOT NULL, publication_date_start DATETIME DEFAULT NULL, comments_enabled TINYINT(1) NOT NULL, comments_close_at DATETIME DEFAULT NULL, comments_default_status INT NOT NULL, comments_count INT DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
CREATE TABLE news__post_tag (post_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_682B20514B89032C (post_id), INDEX IDX_682B2051BAD26311 (tag_id), PRIMARY KEY(post_id, tag_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

CREATE TABLE media__gallery (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, context VARCHAR(64) NOT NULL, default_format VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
CREATE TABLE media__gallery_media (id INT AUTO_INCREMENT NOT NULL, gallery_id INT NOT NULL, media_id INT NOT NULL, position INT NOT NULL, enabled TINYINT(1) NOT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;
CREATE TABLE media__media (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, enabled TINYINT(1) NOT NULL, provider_name VARCHAR(255) NOT NULL, provider_status INT NOT NULL, provider_reference VARCHAR(255) NOT NULL, provider_metadata LONGTEXT DEFAULT NULL COMMENT '(DC2Type:json)', width INT DEFAULT NULL, height INT DEFAULT NULL, length NUMERIC(10, 0) DEFAULT NULL, content_type VARCHAR(255) DEFAULT NULL, content_size INT DEFAULT NULL, copyright VARCHAR(255) DEFAULT NULL, author_name VARCHAR(255) DEFAULT NULL, context VARCHAR(64) DEFAULT NULL, cdn_is_flushable TINYINT(1) DEFAULT NULL, cdn_flush_at DATETIME DEFAULT NULL, cdn_status INT DEFAULT NULL, updated_at DATETIME NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, username_canonical VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, email_canonical VARCHAR(255) NOT NULL, enabled TINYINT(1) NOT NULL, salt VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, locked TINYINT(1) NOT NULL, expired TINYINT(1) NOT NULL, expires_at DATETIME DEFAULT NULL, confirmation_token VARCHAR(255) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles LONGTEXT NOT NULL COMMENT '(DC2Type:array)', credentials_expired TINYINT(1) NOT NULL, credentials_expire_at DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D64992FC23A8 (username_canonical), UNIQUE INDEX UNIQ_8D93D649A0D96FBF (email_canonical), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB;

ALTER TABLE blog__comment ADD CONSTRAINT  FOREIGN KEY (post_id) REFERENCES blog__post (id);
ALTER TABLE blog__post ADD CONSTRAINT  FOREIGN KEY (image_id) REFERENCES media__media (id);
ALTER TABLE blog__post ADD CONSTRAINT  FOREIGN KEY (author_id) REFERENCES user (id);
ALTER TABLE blog__post ADD CONSTRAINT  FOREIGN KEY (collection_id) REFERENCES classification__collection (id);
ALTER TABLE news__post_tag ADD CONSTRAINT  FOREIGN KEY (post_id) REFERENCES blog__post (id);
ALTER TABLE news__post_tag ADD CONSTRAINT  FOREIGN KEY (tag_id) REFERENCES classification__tag (id);

ALTER TABLE media__gallery_media ADD CONSTRAINT  FOREIGN KEY (gallery_id) REFERENCES media__gallery (id);
ALTER TABLE media__gallery_media ADD CONSTRAINT  FOREIGN KEY (media_id) REFERENCES media__media (id);

ALTER TABLE classification__category ADD CONSTRAINT  FOREIGN KEY (parent_id) REFERENCES classification__category (id) ON DELETE CASCADE;
ALTER TABLE classification__category ADD CONSTRAINT  FOREIGN KEY (media_id) REFERENCES media__media (id) ON DELETE SET NULL;
ALTER TABLE classification__collection ADD CONSTRAINT  FOREIGN KEY (gallery_id) REFERENCES media__gallery (id) ON DELETE SET NULL;
